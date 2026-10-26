(function(){
  var K=window.KK||{},repo=K.appRepo||"kartproduction/kalendar",own=repo.split("/")[0],name=repo.split("/")[1]||"",
      base="https://github.com/"+repo,web=K.webApp||"https://"+own+".github.io/"+name+"/";
  function all(sel,fn){Array.prototype.forEach.call(document.querySelectorAll(sel),fn)}
  all("[data-web]",function(a){a.href=web});
  all("#src",function(a){a.href=base});
  // Fallback if GitHub can't be reached: the releases list (not a fixed file).
  all(".apk",function(a){a.href=K.apkUrl||base+"/releases"});
  if(K.apkUrl)return;
  // Ask GitHub for recent releases and pick the one published most recently that has an .apk.
  fetch("https://api.github.com/repos/"+repo+"/releases?per_page=30&t="+Date.now(),{cache:"no-store"})
    .then(function(x){return x.ok?x.json():null}).then(function(list){
      if(!list)return;
      var best=null;
      list.filter(function(r){return !r.draft&&!r.prerelease}).forEach(function(r){
        var f=(r.assets||[]).filter(function(s){return /\.apk$/i.test(s.name)})[0];
        if(f&&(!best||new Date(r.published_at)>new Date(best.r.published_at)))best={r:r,f:f};
      });
      if(!best)return;
      all(".apk",function(a){a.href=best.f.browser_download_url});
      all(".ver",function(e){e.textContent=best.r.tag_name+" ("+best.f.name+")"});
    }).catch(function(){});
})();
