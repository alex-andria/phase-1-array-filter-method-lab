// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

const driverObject = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching (list, query){

    // return driverNames.filter( function(el){
    //     return el.toLowerCase() === query.toLowerCase();
    // })

    //ES2015 Implementation
    return list.filter( el => el.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch (list, query){

    return list.filter(function(el){
        if (query != ''){
        return el.substring(0,query.length) === query;
        }
    });

}

function matchName (list, query){

    //return list.map()

    return list.filter( el => el["name"] === query);


}