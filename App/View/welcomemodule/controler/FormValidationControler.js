/**
 * Created by Luisito la maravilla on 02-05-16.
 */
<!-- creacion de modulos-->
<!-- primero string y despues dependencias-->
var app= angular.module('LoginFormModule', []);

<!-- creacion de controles-->

app.controller('LoginFormControler',function($scope,$http)
        {
            $scope.FormModel= {}; //modelo, entidad generada para sustentar la vista
            //crear funcion para llamar el submit
            $scope.OnSubmit=function()
            {
                console.log("llegue, primer angular JS");
                console.log($scope.FormModel)
            }
        });