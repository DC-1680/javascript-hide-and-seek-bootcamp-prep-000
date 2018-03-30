function getFirstSelector(selector){

  return document.querySelector(selector);
}

function nestedTarget(){
  //pulls a '.target' out of '#nested'(`#` is used for IDs in selectors)
  //(Note that in `index.html` `#nested` and `.target` just _happen_ to be `div`s. This method should work with arbitrary elements.)
  return document.getElementById('nested');
}

function increaseRankBy(n){
  //increases the ranks in all of the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`]
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++){
    let currNum = parseInt(lis[i].innerHTML)
    lis[i].innerHTML = currNum + n;
  }
}

function deepestChild(){
  //pulls out the most deeply nested child from `div#grand-node`.
  // (Remember, you can iterate over elements and call `querySelector()` and `querySelectorAll()` on them.

  var divs = document.getElementById('grand-node').getElementsByTagName("div");
  for(var i = 0; i < divs.length; i++){
     //do something to each div like
     let currElement = divs[i].innerHTML
     if (currElement){
       return currElement;
     } else {
       deepestChild(currElement)
     }
  }

}
