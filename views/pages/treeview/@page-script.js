jQuery(function($) {
	// Browse Files Tree
   

    // the icon to show when a node is selected
    var selectedIcon =
    '<span class="selected-icon d-inline-block text-center border-1 bgc-orange-d1 px-1px mx-1 text-70 pb-1px radius-2px">\
        <i class="w-2 fa fa-check text-white"></i>\
    </span>'

    // the icon to show when a node is deselected
    var deselectedIcon = 
    '<span class="deselected-icon d-inline-block text-center border-1 bgc-white brc-secondary-m3 px-1px mx-1 text-70 pb-1px radius-2px">\
        <i class="w-2 fa fa-times text-orange-l3"></i>\
    </span>'

 
    


    var fileTree = $('#id-jqtree-files')
    fileTree
    .tree({
          data: fileData,
          autoOpen: 1,
          // dragAndDrop: true,
          useContextMenu: false,

          closedIcon : $('<i class="fa fa-caret-right text-muted"></i>'),
          openedIcon : $('<i class="fa fa-caret-right rotate-45 text-muted"></i>'),

          onCreateLi: function(node, $li) {
              $li.find('.jqtree-element').addClass('bgc-h-warning-l3')
              
              // insert the icons
              if(node.icons) {
                  var $title = $li.find('.jqtree-title')

                  var iconDefault = null
                  // prepend the `default` icon
                  if(node.icons.default) {
                    iconDefault = $( node.icons.default[0] ).addClass( node.icons.default[1] ).addClass('node-icon')
                    $title.prepend( iconDefault )
                  }

                  // prepend the `open` icon
                  if(node.icons.open) {
                      if(iconDefault) iconDefault.addClass('closed-icon')
                        $title.prepend(
                            $( node.icons.open[0] ).addClass( node.icons.open[1] ).addClass('opened-icon').addClass('node-icon')
                        )
                  }
              }
          }
    });

	fileTree.on(
		'tree.click',
		function(event) {
			// The clicked node is 'event.node'
			var node = event.node;
			if (node.nombreTab != ""){
			   document.getElementById(node.nombreTab).click();
			}
		}
	);
    

    
})