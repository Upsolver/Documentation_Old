require(['gitbook'], function (gitbook) {

    const selector = '.markdown-section h1, .markdown-section h2, .markdown-section h3:not(#properties,#inputs), .markdown-section h4';
    const githubBase = 'https://github.com/Upsolver/Documentation/blob/master/';

    gitbook.events.bind('page.change', function () {
        // Add .child-active to parents of .active
        $('ul.summary li li.child-active:not(:contains(li.active))').removeClass('child-active');
        $('ul.summary li li.active').parents('li').addClass('child-active');

        // Change the edit on github link
        document.querySelector('a.edit-on-github').href = githubBase + gitbook.state.filepath;

        // Add navigation items
        const addNavItem = function (ul, href, text) {
            const listItem = document.createElement('li');
            const anchorItem = document.createElement('a');
            const textNode = document.createTextNode(text);

            anchorItem.href = href;
            ul.appendChild(listItem);
            listItem.appendChild(anchorItem);
            anchorItem.appendChild(textNode);
        };

        const anchorLevel = function (nodeName) {
            return parseInt(nodeName.charAt(1));
        };

        const navTreeNode = function (current, moveLevels) {
            let e = current;
            if (moveLevels > 0) {
                let ul;
                for (let i = 0; i < moveLevels; i++) {
                    ul = document.createElement('ul');
                    e.appendChild(ul);
                    e = ul;
                }
            } else {
                for (let i = 0; i > moveLevels; i--) {
                    e = e.parentElement;
                }
            }
            return e;
        };

        const anchors = $(selector).get();

        if (anchors.length > 1) {
            let currentLevel;
            let prevLevel = 0;
            let nav = document.createElement('nav');
            let container = nav;
            for (let i = 0; i < anchors.length; i++) {
                let anchor = anchors[i];
                const text = anchor.textContent;
                const href = '#' + anchor.id;
                currentLevel = anchorLevel(anchor.nodeName);
                container = navTreeNode(container, currentLevel - prevLevel);
                addNavItem(container, href, text);
                prevLevel = currentLevel;
            }

            let toc = document.body.querySelector('.toc');
            toc.appendChild(nav);
            $(nav).scrollspy({offset: 50});
        }
    })

});
