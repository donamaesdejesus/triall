var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "A Pink", p_image: "assets/img/apink.jpg", p_price: 28990},
					{p_id: "2", p_name: "Astro", p_image: "assets/img/astro.jpg", p_price: 60138},
					{p_id: "3", p_name: "BigBang", p_image: "assets/img/bigbang.jpg", p_price: 1519000},
					{p_id: "4", p_name: "Blackpink", p_image: "assets/img/blackpink.jpg", p_price: 75187},
					{p_id: "5", p_name: "Btob", p_image: "assets/img/btob.jpg", p_price: 50115000},
					{p_id: "6", p_name: "BTS", p_image: "assets/img/bts.jpg", p_price: 9013}
					
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});