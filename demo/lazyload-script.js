
class SingleElementIntersectionObserver {
  constructor(intersectionHandler, options = {}) {
    const defOptions = {
      threshold: 1,
      // handler only will trigger onece when observed element was intersected.
      once: true,
      // trigger handler only when all entries is visible.
      visibleOnly: true
    };

    options = Object.assign({}, defOptions, options);

    this._observer = new IntersectionObserver((entries, observer) => {
      let entry = entries[0];

      if (options.visibleOnly) {
        if (!entry.isIntersecting) {
          return;
        }
      }

      if (options.once) {
        this.unobserve();
      }

      intersectionHandler(entry, observer);
    }, options);
  }

  observe(elm) {
    if (!elm) {
      return;
    }
    this.unobserve();
    this._observedElm = elm;
    this._observer.observe(elm);
  }

  unobserve() {
    if (this._observedElm) {
      this._observer.unobserve(this._observedElm);
    }
  }

  disconnect() {
    this._observer.disconnect();
  }
}

function lazyLoadScript(observerElm, scriptAttr = {}, opt) {
  const defOptions = {
    threshold: 0.1,
    waiting: 5000
  };
  opt = Object.assign({}, defOptions, opt);

  if (!observerElm instanceof HTMLElement) {
    console.error('[LazyLoadScript] invalid observer element.');
    return;
  }

  let scriptElm = document.createElement('script');
  for (let attr in scriptAttr) {
    scriptElm.setAttribute(attr, scriptAttr[attr]);
  }
  scriptElm.setAttribute('type', 'text/javascript');


  if (scriptAttr.dataset && typeof scriptAttr.dataset === 'object') {
    for (let attr in scriptAttr.dataset) {
      scriptElm.dataset[attr] = scriptAttr.dataset[attr];
    }
  }


  let observer = new SingleElementIntersectionObserver(() => {
    clearTimeout(waitingTimeout);
    console.log('[LazyloadScript] trigger append: ', scriptAttr);
    observerElm.appendChild(scriptElm);
  }, opt);

  let waitingTimeout = setTimeout(() => {
    observer.unobserve();
    console.log('[LazyloadScript] trigger append: ', scriptAttr);
    observerElm.appendChild(scriptElm);
  }, opt.waiting);

  observer.observe(observerElm);
}