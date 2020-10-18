

# 知识分享项目

## 一、搭建微信小程序框架

![1603030783644](C:\Users\wdf\AppData\Roaming\Typora\typora-user-images\1603030783644.png)

| 文件类型                                                     | 必需 | 作用       |
| ------------------------------------------------------------ | ---- | ---------- |
| [js](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html) | 是   | 页面逻辑   |
| [wxml](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/) | 是   | 页面结构   |
| [json](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE) | 否   | 页面配置   |
| [wxss](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html) | 否   | 页面样式表 |

## 二、各功能

### 1、首页

![](C:\Users\wdf\Desktop\数据库\未登录前首页.png)

```
<!--pages/index/index.wxml-->
<view class="container">

<!-- tab -->
<view class="tab">
<view class="tab-item {{tab==0? 'active':''}}" data-tab="0" bindtap="changeTab">发现</view>
<view class="tab-item {{tab==1? 'active':''}}" data-tab="1" bindtap="changeTab">使用说明</view>
</view>

<!-- tab1 -->
<view class="share-list" wx:if="{{tab==0}}">
<view wx:for="{{shareList}}" wx:for-item="share" class="share-item">
<view wx:if="{{share.isOriginal==0}}" class="origin-label {{share.isOriginal==0? 'one':'two'}}">原创</view>
<view wx:else class="origin-label {{share.isOriginal==0? 'one':'two'}}">转载</view>
<image src="{{share.cover}}"></image>
<view class="item-main" data-item="{{share}}" bindtap="goDetail">
<text class="item-title">{{share.title}}</text>
<text class="item-summary">{{share.title}}</text>
</view>
<view class="item-duihuan">
<text>{{share.price}}积分</text>
<text data-item="{{share}}" bindtap="duihuan">兑换</text>
</view>
</view>
</view>

<!-- tab2 -->
<view wx:else class="dicription">
<text>资源均为免费,段焕后即可查看下载地址：点击我的->我的兑换，即可查看，下载兑换过的资源。</text>

<view>
<text class="dicription-title">获得积分的方式</text>
<view>> 每日签到</view>
<view>> 投稿</view>
<view>> 转发</view>
<view>> 提建议、意见</view>
</view>

<view>
<text class="dicription-title">深入交流</text>
<view>> 技术交流QQ群：731548893</view>
<view>> 技术交流微信群：叫我微信，注明加微信群</view>
<view>> 私人微信：jumping_me</view>
</view>

<view>
<text class="dicription-title">公众号（技术干活分享</text>
<view>> 技术交流QQ群：731548893</view>
<view>> 技术交流微信群：叫我微信，注明加微信群</view>
<view>> 私人微信：jumping_me</view>
</view>


</view>

</view>
```

### 2、登录

![](C:\Users\wdf\Desktop\数据库\登录状态.png)

```
<!-- 已登录 -->
<view class="my-info" wx:else>
<view class="user">
<image src="{{userInfo.avatarUrl}}"></image>
<text>{{userInfo.wxNickName}}</text>
<text>积分:{{userInfo.bonus}}</text>
<view class="qiandao">签到</view>
<button size="small" bindtap="exit">退出登录</button>
</view>
<view class="my-manage" wx:for="{{linkList}}">
<navigator url="{{item.url}}">
<view class="manage-item">{{item.text}}</view>
</navigator>
</view>
</view>
```

### 3、我的投稿

![](C:\Users\wdf\Desktop\数据库\我的投稿.png)

```
<view>
<view wx:for="{{shareList}}" wx:for-item="share" class="share-item" data-item="{{share}}" bindtap="goDetail">
<view wx:if="{{share.isOriginal==0}}" class="origin-label {{share.isOriginal==0? 'one':'two'}}">原创</view>
<view wx:else class="origin-label {{share.isOriginal==0? 'one':'two'}}">转载</view>
<image src="{{share.cover}}"></image>
<view class="item-main" data-item="{{share}}" bindtap="goDetail">
<text class="item-title">{{share.title}}</text>
<wxs src="../../utils/sub.wxs" module="tools" />
<text class="item-summary">{{tools.sub(share.summary)}}</text>
</view>
<view class="NOT_YET"  wx:if="{{share.auditStatus == 'NOT_YET'}}"></view>
<text class="NOT_YET-text"  wx:if="{{share.auditStatus == 'NOT_YET'}}">待审核</text>
</view>
</view>
```

