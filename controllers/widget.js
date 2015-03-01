var _callback = null,
    _new_callback = null;

function removeBar(window) {
        if(window.getActivity()) {
            var actionBar = window.getActivity().getActionBar();
            if (actionBar) { actionBar.hide();}
        }
}

function openWindow(window) {
        if (OS_ANDROID) {
            window.addEventListener('open', function() {
              removeBar(window);
            });
        }
        window.open();
}

function hideSelectionList() {
      $.selectionList.setHeight(0);
      $.selectionList.hide();
      $.title.hide();
      $.title.setHeight(0);
}

$.init = function(params, callback, new_callback) {
    var list = params.list;
    items = _.map(list, function(subItem) {
                var text = typeof(subItem) == "string" ? subItem : subItem.text;
                return({
                        subItem  : subItem,
                        name     : { text: text },
                        properties : {
                            width           : '100%',
                            height          : '50dip',
                            backgroundColor : '#FFF'
                        },
                        template: 'base',
                        selectedBackgroundColor: "#e5e5e5"
                });
    });

    if ( items.length > 0 ) {
        $.section.setItems(items);
    } else {
        hideSelectionList();
    }

    if (callback) { _callback = callback; }
    if (new_callback) { 
          _new_callback = new_callback;
          $.newItem.show();
    }

    if (params.title)    {$.title.setText(params.title);}
    openWindow($.selector);
};

$.selectionList.addEventListener("itemclick", function(e){
    var item = e.section.getItemAt(e.itemIndex);
        selected = item.subItem;
        $.selector.close();
        if (_callback) {
            _callback(selected);
        }
});

$.newItem.addEventListener("click", function() {
    $.selector.close();
    if (_new_callback) { _new_callback($); }
});

$.close.addEventListener("click", function(){
  $.selector.close();
});
