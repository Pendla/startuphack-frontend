
angular.module('fnfjs')

.directive('listItem', listItem);

function listItem() {
  var directive = {
    restrict: 'E',
    templateUrl: 'list-view/list-item/list-item.tpl.html',
    scope: {
        item: '='
    },
    controller: ListItemCtrl,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

function ListItemCtrl() {
  var vm = this;
}
