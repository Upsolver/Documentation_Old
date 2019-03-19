# Permissions Overview

Upsolver supports IAM (Identity Access Management) style permissions. This means you can create users, groups, policies and relationships between them to define the authorized operations allowed foe each user.

## Users

Each user will have his own log-in information for connecting to Upsolver. This user can have permissions policies dierctly attached to it or it can be part of a group which has policies attached. The user will have all the permissions defined in the policies directly attached to him and in groups he is part of.

## Groups

Groups can be created to easily manage the permissions for different classes of users or for different teams. For example you could have a group for the Dev-Ops team which can manage connections and another group for Developers who can only create and manage outputs.

## Permissions Policies

A permissions policy defines a set of actions/operations you would like to allow or deny for users attached to the policy. The permissions policy is defined by a list of statements. Each statement can either Allow or Deny some actions. A statement can be limited to specific resources (by their ID) or by conditions (For example, only allow the actions within a specific Workspace).

There are also managed policies which are created and maintened by Upsolver and allow a specific set of actions. For example the "Editors" managed policy allows users to do anything besides manage the IAM.

### Actions
The operation allowed or denied is described by an "Action". An action is a string with the following format: `resource_type:edit/view:operation`.
For example the action `input:edit:create` will allow users to create new Inputs. The action `*:view:*` will allow users to perform all viewing (non-modifying) operation on all the resource types. 

See the full list of actions in the documenation.

### Policy Evaluation

Initially all actions are considier denied. If an actions is attemted all the policies attached to the user are evaluated to find out an "Allow" statement on that action (which matches the resource identifier and the conditions of the statement). If no matching "Allow statement is found the action is denied. If a matching "Deny" statement is found the action will always be denied, even if there is another matching "Allow" statement.

Here are some example statements with explanations of what they do.


#### Allow all statement

```
{
	"effect" : "Allow",
	"actions" : [ 
	    "*"
	],
	"resources" : [ 
	    "*"
	],
	"conditions" : []
}
```

This is the simplest allow statement and allows users attached to it to perform any action in the system. Admins should have this policy attached (Available via the "Admin" managed policy).

#### Deny all on a specific resource
```
{
	"effect" : "Deny",
	"actions" : [ 
	    "*"
	],
	"resources" : [ 
	    "0890e33e-67b6-4248-a5bd-80dc743681d9*"
	],
	"conditions" : []
}
```

This statement will deny any operation on resources which start with the identifier `0890e33e-67b6-4248-a5bd-80dc743681d9` (Note the `*` at the end). This can be usefull to make sure an importantn production output is not modified.

####  Block edit operations on running outputs
```
{
	"effect" : "Deny",
	"actions" : [ 
	    "output:edit:*"
	],
	"resources" : [ 
	    "*"
	],
	"conditions" : [ 
	    {
		"conditionType" : "Equals",
		"field" : "is-running",
		"value" : "true"
	    }
	]
}
```

This statement will deny any "edit" operations on running outputs. Users with this statement will still be allowed to view running outputs but will not be allowed to modify them at all.

#### Allow edit within a workspace
```
{
	"effect" : "Allow",
	"actions" : [ 
	    "output:edit:*"
	],
	"resources" : [ 
	    "*"
	],
	"conditions" : [ 
	    {
		"conditionType" : "Equals",
		"field" : "workspace",
		"value" : "12345678-1234-1234-1234-1234567890ab"
	    }
	]
}
```

This statement will allow editing outputs within the workspace `12345678-1234-1234-1234-1234567890ab`.

