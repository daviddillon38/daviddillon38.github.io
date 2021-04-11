// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./daviddillon38.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var maleArray = _.filter(array, function(customerObj){
       return customerObj.gender === "male";
    });
    return maleArray.length;
};

var femaleCount = function(array) {
   var femaleArray =  _.filter(array, function(customerObj){
       return customerObj.gender === "female";
    });
    return femaleArray.length;
};

var oldestCustomer = function(array){
    return _.reduce(array, function(prev, curr){
        if(curr.age > prev.age){
            return curr;
        }else{
            return prev;
        }
    }).name;
}

var youngestCustomer= function(array){ 
    return _.reduce(array, function(prev, curr){
        if(curr.age < prev.age){
            return curr;
        }else{
            return prev;
        }
    }).name;
};

var averageBalance = function (array) {
    const balanceNum = function(balance){
        return Number(balance.replace(/[\$,]/g,''));
    }
    
    return _.reduce(array, function(prev, curr){
       return prev = (prev + balanceNum(curr.balance))
    },0) / array.length;
};

var firstLetterCount =function (array, letter){
    return _.filter(array, function(curr){
        return curr.name.toLowerCase().startsWith(letter.toLowerCase())
    }).length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    const customerObj = _.filter(array, function(c){
        return c.name === customer;
    })[0];
    
    
    return _.filter(customerObj.friends, function(friend){
        return friend.name.toLowerCase().startsWith(letter.toLowerCase())
    }).length;
};

var friendsCount = function(array, name) {
    return _.pluck(_.filter(array, function(customer){
                return _.some(customer.friends, function(friend){
                    return friend.name === name;
                })
            }),"name");
};;

var topThreeTags = function(array){
    // const result = {};
    // _.each(array, ele => _.each(ele.tags, tag => result.hasOwnProperty(tag) ? result[tag] += 1 : result[tag] = 1)); 
    //  console.log(Object.keys(result).sort((a, b) => result[b] - result[a]), result)
    // return _.first(Object.keys(result).sort((a, b) => result[b] - result[a]), 3); 
    
        const result = {};
    _.each(array,function(curr){
        _.each(curr.tags, function(tag){
            if(result.hasOwnProperty(tag)){
                 result[tag] += 1;
            }else{
                 result[tag] = 1;
            }
            
        })
        
    }); 
            
     console.log(Object.keys(result).sort(function(a,b){
         result[b] - result[a]
          }), result)
    return _.first(Object.keys(result).sort((a, b) => result[b] - result[a]), 3); 
    
 };




var genderCount = function(array){
   var genderCountObj =  _.reduce(array, function(resultObj, customerObj){
        if(resultObj[customerObj.gender]){
            resultObj[customerObj.gender] +=1;
        }else{
            resultObj[customerObj.gender] = 1;
        }
        return resultObj
    },{});
    return genderCountObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
