var Generator = function(letters,dict,inv){
  var arr = letters.split('');
  this.validWords=[];
  this.obj = {};
  this.dictionary = dict;
  this.invalidCombos= inv;

  for(var i = 0; i<arr.length; i++){
    if(this.obj[arr[i]]===undefined){
      this.obj[arr[i]]=1;
    } else{
      this.obj[arr[i]]+=1;
    }
  }

};

Generator.prototype.getWords = function(){
  //if(this.validWords.length!==0){
    this.generate();
  //}
  return this.validWords;
};

Generator.prototype.generate = function(currWord,lettersLeft){
  if(this.dictionary.indexOf(currWord)!==-1){
    this.validWords.push(currWord);
  }
  return this.validWords;



};


