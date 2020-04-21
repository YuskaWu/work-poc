# Facebook Pixel #
在網站上鑲嵌Facebook Pixel程式碼後，就可以用綁定事件追蹤的方式收集使用者在你的網站的行為，再利用FB Pixel後台系統分析收集來的數據進而改善facebook廣告投放。

最終目的: **make your AD more effective**

請直接看[**淺顯易懂的簡介**](https://www.youtube.com/watch?v=L0KIT3SM7PI)(可以開啟字幕)


### What is 廣告轉換(advertising conversion) ? ###
上面的簡介影片多次提到"轉換"這個詞，以下是它的解釋:

*廣義的解釋:*
>An advertising conversion refers to any goal action taken by a potential customer that you’ve deemed valuable to your ad campaign.
(您認為對廣告活動有價值的)客戶對廣告採取的任何目標操作

*Google的解釋:*
> Conversion: An action that's counted when someone interacts with your ad (for example, clicks a text ad or views a video ad) and then takes an action that you’ve defined as valuable to your business, such as an online purchase or a call to your business from a mobile phone.
當某人與你的廣告互動(例如點擊廣告、觀看廣告影片)，然後執行對您的業務有價值的操作，例如致電給你或線上購買

簡單說: **廣告直接或間接轉換為你認為對你有益的事物**


### 如何嵌入程式碼、綁定事件追蹤? ###
需要嵌入的程式碼分為兩類，一種是固定形式的initial code，透過UI介面直接產生，不需要了解其內容，通常第一次埋設後就不會更動。

要埋的code大概長這樣:
```
<!-- Facebook Pixel Code -->
  <script>
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );
    fbq('init', '823092551515939');
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1" style="display: none;"
      src="https://www.facebook.com/tr?id=823092551515939&ev=PageView&noscript=1" />
  </noscript>
  <!-- End Facebook Pixel Code -->
```


另一種需要埋設的是**綁定事件追蹤**。

綁定事件追蹤又分兩種，一種是**標準事件**，可以直接透過**Facebook Event Setup Tool**直接在埋設的網頁進行設定，過程中不會修改任何code。而另一種**自訂義事件追蹤**，這部份會比較麻煩，需要額外自行埋code。。

詳細請參考[**官方教學**](https://www.facebook.com/business/learn/lessons/tips-to-create-and-install-facebook-pixel)