花800买的国内开发账号
血泪教训： 1.对方可以通过邮箱重置密码
		 2.对方可以通过密保问题修改密码

账号：arext63@163.com
密码：Hh200404(密码已失效)
-----------
创建dev证书和dis证书
创建bundleID: com.cn18x.turtlesticker
创建调试设备：
创建dev描述文件、dis描述文件
-----------
创建工程： Single View App
product name: turtlesticker
Organization Name: cn18x
Organization Identifier: com.cn18x
-----------
支持iOS 10.0
去掉iPad、Landscape Left/Right
AppDelegate中声明"@property (strong, nonatomic) UIWindow * window;"
-----------
info.plist新增：
<key>NSCameraUsageDescription</key>
<string>请允许APP访问您的相机</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>请允许APP保存图片到相册</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>请允许APP访问您的相册</string>
-----------
主控制器通过自定义UICollectionViewCell展示24张图片：
turtle1@3x.png  		尺寸：300*300
turtle24@3x.png  		尺寸：300*300
-----------
新建扩展target:
iOS APP现有工程中，添加贴纸功能

1. 打开现有工程
2. File -> New -> Target -> Sticker Pack Extension
product name: sticker
Organization name: cn18x
Organization Identifier: com.cn18x.turtlesticker.sticker

3. Sticker.xcassets
   Info.plist

4. 切换target -> Sticker Target
   Display Name: 主APP在Appstore上显示的名称：turtle sticker
   Bundle ID: com.cn18x.turtlesticker.sticker
   version: 1.0
   build: 1

5. Stickers.xcassets
   5.1 APP ICON，必须与主产品的ICON一致
   5.2 sticker size :small(4个一排，推荐，300X300@3x.png), M（3个一排，408X408@3x）, Large(2个一排，618X618@3x)   
注意：
1. 贴纸的显示名称，必须与主app一致
2. 贴纸的bundle id必须为： 主Bundle ID + Sticker  

————————————————
app描述：


iPhone 11 pro max 尺寸： 1242x2688.png
iPhone 8  Plus 	  尺寸:  1242x2208.png

————————————————
由于是800块钱买的国内开发者账号，而且审核通过后发现，双重验证被人关了，密码被人改了，不得已：
转让APP

TestFlight Beta 版测试
您必须从您要转让的 App 中移除所有构建版本和测试员，并清空“测试信息”中的所有信息栏。

修改办法：
点击对应版本，右上方，设为已过期

308829827@qq.com
N7NJC6YLRV

————————————————
git init
git add --all
git commit -m 'iOS 国内区白包7 turtle sticker - appstore审核通过版'
git remote add origin https://github.com/ixixii/iOS_APP_GuoNei7_turtle_sticker.git
git push -u origin master
git push origin master
