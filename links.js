(function(){
  var K=window.KK||{},repo=K.appRepo||"kartproduction/kalendar",own=repo.split("/")[0],name=repo.split("/")[1]||"",
      base="https://github.com/"+repo,web=K.webApp||"https://"+own+".github.io/"+name+"/";
  function all(sel,fn){Array.prototype.forEach.call(document.querySelectorAll(sel),fn)}
  all(".apk",function(a){a.href=K.apkUrl||base+"/releases/latest"});
  all("[data-web]",function(a){a.href=web});
  all("#src",function(a){a.href=base});
  if(!K.apkUrl&&repo.indexOf("YOUR-USERNAME")<0)
    fetch("https://api.github.com/repos/"+repo+"/releases/latest").then(function(x){return x.ok?x.json():null}).then(function(j){
      if(!j)return;var f=(j.assets||[]).filter(function(s){return /\.apk$/.test(s.name)})[0];
      if(f){all(".apk",function(a){a.href=f.browser_download_url});all(".ver",function(e){e.textContent=j.tag_name})}
    }).catch(function(){});
})();
