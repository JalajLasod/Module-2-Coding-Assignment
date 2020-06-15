(function () {
"use strict";

angular.module("ShoppingList",[])
.controller("mainCtrl",mainCtrl)
.controller("ctrl1",ctrl1)
.controller("ctrl2",ctrl2)
.service('serviceCtrl',serviceCtrl);

mainCtrl.$inject=['serviceCtrl'];

ctrl1.$inject=['serviceCtrl'];

ctrl1.$inject=['serviceCtrl'];

function mainCtrl(serviceCtrl) {

  var mainCtrl=this;
  mainCtrl.message="";

  mainCtrl.bought=function (value) {
    serviceCtrl.bought(value);

    mainCtrl.list=serviceCtrl.getList();

    if (mainCtrl.list.length==0) {
      mainCtrl.message="Everything is bought!";
    }
    console.log(mainCtrl.message);
  };

}

function ctrl1(serviceCtrl) {
  var ctrl1=this;

  ctrl1.list=serviceCtrl.getList();

};

function ctrl2(serviceCtrl) {
  var ctrl2=this;
  ctrl2.message="Nothing bought yet";
  ctrl2.list=serviceCtrl.getItems();

  if (ctrl2.list.length!=0) {
    ctrl2.message=""
  }
};

function serviceCtrl() {

  var service=this;

  var toBuy=[
    {
      item:"cookies", quantity:"5"
    },
    {
      item:"chips pack", quantity:"10"
    },
    {
      item:"bismol", quantity:"1"
    },
    {
      item:"blah", quantity:"5"
    },
    {
      item:"blahhh", quantity:"5"
    },

  ];

  var boughtList=[];

  service.bought=function (value) {

    boughtList.push(toBuy[value]);

    console.log(toBuy);

    toBuy.splice(value,1);
  };

  service.getList=function () {

    return toBuy;
  };

  service.getItems=function () {
    return boughtList;
  };

}

})()
