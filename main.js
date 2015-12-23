var db = [];
var articleList = new Vue({
  el:'#article-list',
  data:{
    articles:[],
  },
  methods:{
    try:function(){
      alert("passed");
    },
    newEntry:function(article){
      console.log(article);
      this.articles.push(article);
      console.log(this.articles);
    }
  }
});
var articleInput = new Vue({
  el:"#article-in",
  data:{
    articleName:"",
    articleUrl:"",
    articleTags:""
  },
  methods:{
    submit:function(){
      var name = this.articleName;
      var url = this.articleUrl;
      var tags = this.articleTags;
      var article = {'nametext':name,'url':url,'tags':tags};
      articleList.newEntry(article);
    }
  }
});
