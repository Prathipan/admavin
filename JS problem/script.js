//-----------------------------------PROBLEM - 1---------------------------

let data = [
  {
    id: "1R",
    name: "Retail",
    parentId: null,
    children: [
      {
        id: "1R-1",
        name: "supermarket",
        parentId: "1R",
      },
      {
        id: "1R-2",
        name: "Wholesale Market",
        parentId: "1R",
      },
      {
        id: "1R-3",
        name: "Flea market",
        parentId: "1R",
      },
      {
        id: "1R-4",
        name: "Malls",
        parentId: "1R",
      },
    ],
  },
  {
    id: "2H",
    name: "Healthcare",
    parentId: null,
    children: [
      {
        id: "2H-1",
        name: "Clinic",
        parentId: "2H",
        children: [
          {
            id: "2H-1C-1",
            name: "Dental",
            parentId: "2H-1",
          },
          {
            id: "2H-1C-2",
            name: "Ortho",
            parentId: "2H-1",
          },
        ],
      },
      {
        id: "2H-2",
        name: "Hospital",
        parentId: "2H",
        children: [],
      },
      {
        id: "2H-3",
        name: "Diagnostic Center",
        parentId: "2H",
        children: [
          {
            id: "2H-3D-1",
            name: "Imaging Lab",
            parentId: "2H-1",
          },
          {
            id: "2H-3D-2",
            name: "Pathology Lab",
            parentId: "2H-1",
          },
        ],
      },
    ],
  },
];

let flattern = (array) => {
  var result = [];
  array.forEach((a) => {
    // console.log(a)
    result.push(a);
    if (Array.isArray(a.children)) {
      result = result.concat(flattern(a.children));
    }
    delete a.children;
  });
  return result;
};

console.log("Problem 1 => Flattern array",flattern(data));


//-------------------------------PROBLEM - 2--------------------------------------------------


let intArray = [-1, -3, 2, 4, 9, -10, 24, -30, -33, -29, 1, 8, 19, 23];
   
   function findMaxArray(arr) {
    // Write your code here.
    let res =  { "maxPosStreak" : 0 , "maxNegStreak" : 0  },count=0;
    
    //Negative streak
    arr.forEach((num) => {
        if(num < 0)
        {
            count++;
            res.maxNegStreak = Math.max(count,res.maxNegStreak);
        }else if(num > 0 ) {
            count=0
        }
    })
    
    //positive streak
    arr.forEach((num) => {
        if(num > 0)
        {
            count++;
            res.maxPosStreak = Math.max(count,res.maxPosStreak);
        }else if(num < 0) {
            count=0;
        }
    })
    
    return res;

    }
console.log("Problem 2 => Find streaks",findMaxArray(intArray));



// ---------------------------------problem 3------------------------------------------------

let people = [
    { name : "Alice", age : 21 },
    { name : "Alice", age : 24 },
    { name : "Max", age : 21 },
    { name : "June", age : 23 },
    { name : "July", age : 24},
    ];
    function groupBy(arr) {
    // Write your code here
      let res = {};
      
      for(let i = 0 ; i < arr.length ; i++)
       {
        //   console.log(arr[i])
           res[arr[i].age] ? res[arr[i].age].push(arr[i]) : res[arr[i].age] = new Array(arr[i]) 
       }
      return res;
    }
    console.log(groupBy(people));