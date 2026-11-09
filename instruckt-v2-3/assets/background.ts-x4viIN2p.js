chrome.runtime.onInstalled.addListener(()=>{});chrome.action.onClicked.addListener(async e=>{if(e.id)try{await chrome.tabs.sendMessage(e.id,{type:"instruckt:toggle-visible"})}catch{}});
//# sourceMappingURL=background.ts-x4viIN2p.js.map
