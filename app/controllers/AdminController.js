(function(){
  'use strict';

  angular
    .module('appController')
    .controller('adminController', adminController)
    .controller('BasicDemoCtrl', BasicDemoCtrl)
    .controller('PanelDialogCtrl', PanelDialogCtrl);

  function adminController($firebaseArray, $mdDialog, $scope, $stateParams) {
    var refGrafik  = firebase.database().ref('grafik');
    var refKandang = firebase.database().ref('kandangmirror/g');
    var refSetting = firebase.database().ref('setting');

    $scope.grafik  = $firebaseArray(refGrafik);
    $scope.kandang = $firebaseArray(refKandang);
    $scope.now     = now();

    refSetting.on("value", function (snapshot) {
      $scope.setMulaiKandang1 = snapshot.val().tanggalMulaiLantai1;
      $scope.setMulaiKandang2 = snapshot.val().tanggalMulaiLantai2;
      $scope.setMulaiKandang3 = snapshot.val().tanggalMulaiLantai3;
      $scope.setMulaiKandang4 = snapshot.val().tanggalMulaiLantai4;
      $scope.setMulaiKandang5 = snapshot.val().tanggalMulaiLantai5;
      $scope.setMulaiKandang6 = snapshot.val().tanggalMulaiLantai6;
    });

    function now() {
      var d = new Date();
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var date = d.getDate();

      if (month < 10) {
        month = '0' + month;
      }

      if (date < 10) {
        date = '0' + date;
      }

      var now = year + '-' + month + '-' + date;

      return now;
    }

    $scope.tanggal = new Date();

    var dateK1 = $scope.setMulaiKandang1;
    var dateK2 = $scope.setMulaiKandang2;
    var dateK3 = $scope.setMulaiKandang3;
    var dateK4 = $scope.setMulaiKandang4;
    var dateK5 = $scope.setMulaiKandang5;
    var dateK6 = $scope.setMulaiKandang6;

    var timestamp = new Date($scope.tanggal).getTime();
    var timestampK1 = new Date(dateK1).getTime();
    var timestampK2 = new Date(dateK2).getTime();
    var timestampK3 = new Date(dateK3).getTime();
    var timestampK4 = new Date(dateK4).getTime();
    var timestampK5 = new Date(dateK5).getTime();
    var timestampK6 = new Date(dateK6).getTime();

    var diffK1 = timestamp - timestampK1;
    var diffK2 = timestamp - timestampK2;
    var diffK3 = timestamp - timestampK3;
    var diffK4 = timestamp - timestampK4;
    var diffK5 = timestamp - timestampK5;
    var diffK6 = timestamp - timestampK6;

    var newDateK1 = new Date(diffK1);
    var newDateK2 = new Date(diffK2);
    var newDateK3 = new Date(diffK3);
    var newDateK4 = new Date(diffK4);
    var newDateK5 = new Date(diffK5);
    var newDateK6 = new Date(diffK6);

    $scope.dateKandang1 = newDateK1.getDate() - 1;
    $scope.dateKandang2 = newDateK2.getDate() - 1;
    $scope.dateKandang3 = newDateK3.getDate() - 1;
    $scope.dateKandang4 = newDateK4.getDate() - 1;
    $scope.dateKandang5 = newDateK5.getDate() - 1;
    $scope.dateKandang6 = newDateK6.getDate() - 1;

    $scope.onTabChanges = function (key) {
      $scope.kandang = key;
    }

    $scope.tambahDataK1 = function () {
      var tanggal = $scope.tanggal;

      var dates = new Date(tanggal);
      var yyyy = dates.getFullYear();
      var mm = dates.getMonth() + 1;
      var dd = dates.getDate();

      if (mm < 10) {
        mm = '0' + mm;
      }

      if (dd < 10) {
        dd = '0' + dd;
      }

      var tgl = yyyy + '-' + mm + '-' + dd;

      var updates = {};
      updates['grafik/kandang1/feedandmortality/' + tgl + '/ayamMati'] = $scope.data.ayamMati;
      updates['grafik/kandang1/feedandmortality/' + tgl + '/pakan'] = $scope.data.pakan;
      firebase.database().ref().update(updates);
    }

    $scope.tambahDataK2 = function () {
      var tanggal = $scope.tanggal;

      var dates = new Date(tanggal);
      var yyyy = dates.getFullYear();
      var mm = dates.getMonth() + 1;
      var dd = dates.getDate();

      if (mm < 10) {
        mm = '0' + mm;
      }

      if (dd < 10) {
        dd = '0' + dd;
      }

      var tgl = yyyy + '-' + mm + '-' + dd;

      var updates = {};
      updates['grafik/kandang2/feedandmortality/' + tgl + '/ayamMati'] = $scope.data.ayamMati;
      updates['grafik/kandang2/feedandmortality/' + tgl + '/pakan'] = $scope.data.pakan;
      firebase.database().ref().update(updates);
    }

    $scope.tambahDataK3 = function () {
      var tanggal = $scope.tanggal;

      var dates = new Date(tanggal);
      var yyyy = dates.getFullYear();
      var mm = dates.getMonth() + 1;
      var dd = dates.getDate();

      if (mm < 10) {
        mm = '0' + mm;
      }

      if (dd < 10) {
        dd = '0' + dd;
      }

      var tgl = yyyy + '-' + mm + '-' + dd;

      var updates = {};
      updates['grafik/kandang3/feedandmortality/' + tgl + '/ayamMati'] = $scope.data.ayamMati;
      updates['grafik/kandang3/feedandmortality/' + tgl + '/pakan'] = $scope.data.pakan;
      firebase.database().ref().update(updates);
    }

    $scope.tambahDataK4 = function () {
      var tanggal = $scope.tanggal;

      var dates = new Date(tanggal);
      var yyyy = dates.getFullYear();
      var mm = dates.getMonth() + 1;
      var dd = dates.getDate();

      if (mm < 10) {
        mm = '0' + mm;
      }

      if (dd < 10) {
        dd = '0' + dd;
      }

      var tgl = yyyy + '-' + mm + '-' + dd;

      var updates = {};
      updates['grafik/kandang4/feedandmortality/' + tgl + '/ayamMati'] = $scope.data.ayamMati;
      updates['grafik/kandang4/feedandmortality/' + tgl + '/pakan'] = $scope.data.pakan;
      firebase.database().ref().update(updates);
    }

    $scope.tambahDataK5 = function () {
      var tanggal = $scope.tanggal;

      var dates = new Date(tanggal);
      var yyyy = dates.getFullYear();
      var mm = dates.getMonth() + 1;
      var dd = dates.getDate();

      if (mm < 10) {
        mm = '0' + mm;
      }

      if (dd < 10) {
        dd = '0' + dd;
      }

      var tgl = yyyy + '-' + mm + '-' + dd;

      var updates = {};
      updates['grafik/kandang5/feedandmortality/' + tgl + '/ayamMati'] = $scope.data.ayamMati;
      updates['grafik/kandang5/feedandmortality/' + tgl + '/pakan'] = $scope.data.pakan;
      firebase.database().ref().update(updates);
    }

    $scope.tambahDataK6 = function () {
      var tanggal = $scope.tanggal;

      var dates = new Date(tanggal);
      var yyyy = dates.getFullYear();
      var mm = dates.getMonth() + 1;
      var dd = dates.getDate();

      if (mm < 10) {
        mm = '0' + mm;
      }

      if (dd < 10) {
        dd = '0' + dd;
      }

      var tgl = yyyy + '-' + mm + '-' + dd;

      var updates = {};
      updates['grafik/kandang6/feedandmortality/' + tgl + '/ayamMati'] = $scope.data.ayamMati;
      updates['grafik/kandang6/feedandmortality/' + tgl + '/pakan'] = $scope.data.pakan;
      firebase.database().ref().update(updates);
    }

    $scope.tambahKandang = function () {
      var kandang = 1;
      var jumlah = 0;

      refGrafik.on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          kandang += 1;
        })
      });

      refKandang.on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          jumlah += 1;
        })
      });

      var updates = {};
      updates['grafik/kandang' + kandang + '/namaKandang'] = $scope.data.namaKandang;
      updates['grafik/kandang' + kandang + '/jmlKolom'] = $scope.data.jumlahKolom;
      updates['grafik/kandang' + kandang + '/setting/jumlahAwalAyamLantai'] = $scope.data.jumlahAyam;
      updates['grafik/kandang' + kandang + '/setting/panenLantai'] = "false";
      updates['grafik/kandang' + kandang + '/setting/tanggalMulaiLantai'] = $scope.now;

      
      for (var i = 1; i <= $scope.data.jumlahGrid; i++) {
        var key = jumlah + i;
        updates['kandangmirror/g/' + key + '/idGrid'] = i;
        updates['kandangmirror/g/' + key + '/idKandang'] = kandang;
        updates['kandangmirror/g/' + key + '/namaKandang'] = $scope.data.namaKandang;
        updates['kandangmirror/g/' + key + '/posisi'] = i;
      }      
    
      return firebase.database().ref().update(updates);
    };

    $scope.ubahGrid = function(id, idGrid, idKandang, namaKandang, posisi, ev) {
      $mdDialog.show({
        locals: {id: id, idKandang: idKandang, namaKandang: namaKandang, posisi: posisi},
        controller: ['$scope', 'id', 'idKandang', 'namaKandang', 'posisi', 
                      function ($scope, id, idKandang, namaKandang, posisi) {

          $scope.id = id;
          $scope.idKandang = idKandang;
          $scope.namaKandang = namaKandang;
          $scope.posisi = posisi;

          $scope.simpanGrid = function() {
            var updates = {};
            
            refKandang.child($scope.id).remove();
            updates['kandangmirror/g/' + $scope.noRfid + '/idGrid'] = $scope.noGrid;
            updates['kandangmirror/g/' + $scope.noRfid + '/idKandang'] = $scope.idKandang;
            updates['kandangmirror/g/' + $scope.noRfid + '/namaKandang'] = $scope.namaKandang;
            updates['kandangmirror/g/' + $scope.noRfid + '/posisi'] = $scope.posisi;
              
            return firebase.database().ref().update(updates);
          }

          $scope.closeDialog = function() {
            $mdDialog.hide();
          }         
        }],
        templateUrl: 'app/views/partials/dialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen 
      })
    }
    
  }

  /* Menu Dialog Tambah Data */
  function BasicDemoCtrl($mdPanel) {
    this._mdPanel = $mdPanel;
    this.disableParentScroll = false;
  }

  BasicDemoCtrl.prototype.showDialogTambahKandang = function() {
    var position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();

    var config = {
      attachTo: angular.element(document.body),
      controller: PanelDialogCtrl,
      controllerAs: 'ctrl',
      disableParentScroll: this.disableParentScroll,
      templateUrl: 'app/views/partials/kandang.html',
      hasBackdrop: true,
      panelClass: 'demo-dialog-example',
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
  };

  BasicDemoCtrl.prototype.showDialogInput1 = function() {
    var position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();

    var config = {
      attachTo: angular.element(document.body),
      controller: PanelDialogCtrl,
      controllerAs: 'ctrl',
      disableParentScroll: this.disableParentScroll,
      templateUrl: 'app/views/partials/input1.html',
      hasBackdrop: true,
      panelClass: 'demo-dialog-example',
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
  };

  BasicDemoCtrl.prototype.showDialogInput2 = function() {
    var position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();

    var config = {
      attachTo: angular.element(document.body),
      controller: PanelDialogCtrl,
      controllerAs: 'ctrl',
      disableParentScroll: this.disableParentScroll,
      templateUrl: 'app/views/partials/input2.html',
      hasBackdrop: true,
      panelClass: 'demo-dialog-example',
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
  };

  BasicDemoCtrl.prototype.showDialogInput3 = function() {
    var position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();

    var config = {
      attachTo: angular.element(document.body),
      controller: PanelDialogCtrl,
      controllerAs: 'ctrl',
      disableParentScroll: this.disableParentScroll,
      templateUrl: 'app/views/partials/input3.html',
      hasBackdrop: true,
      panelClass: 'demo-dialog-example',
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
  };

  BasicDemoCtrl.prototype.showDialogInput4 = function() {
    var position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();

    var config = {
      attachTo: angular.element(document.body),
      controller: PanelDialogCtrl,
      controllerAs: 'ctrl',
      disableParentScroll: this.disableParentScroll,
      templateUrl: 'app/views/partials/input4.html',
      hasBackdrop: true,
      panelClass: 'demo-dialog-example',
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
  };

  BasicDemoCtrl.prototype.showDialogInput5 = function() {
    var position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();

    var config = {
      attachTo: angular.element(document.body),
      controller: PanelDialogCtrl,
      controllerAs: 'ctrl',
      disableParentScroll: this.disableParentScroll,
      templateUrl: 'app/views/partials/input5.html',
      hasBackdrop: true,
      panelClass: 'demo-dialog-example',
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
  };

  BasicDemoCtrl.prototype.showDialogInput6 = function() {
    var position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();

    var config = {
      attachTo: angular.element(document.body),
      controller: PanelDialogCtrl,
      controllerAs: 'ctrl',
      disableParentScroll: this.disableParentScroll,
      templateUrl: 'app/views/partials/input6.html',
      hasBackdrop: true,
      panelClass: 'demo-dialog-example',
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
  };

  function PanelDialogCtrl(mdPanelRef) {
    this._mdPanelRef = mdPanelRef;
  }

  PanelDialogCtrl.prototype.closeDialog = function() {
    var panelRef = this._mdPanelRef;

    panelRef && panelRef.close().then(function() {
      angular.element(document.querySelector('md-grid-tile')).focus();
      panelRef.destroy();
    });
  };

})();
