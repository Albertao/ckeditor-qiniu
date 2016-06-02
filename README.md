# ckeditor-qiniu

a ckeditor plugin for qiniu video upload.

# Usage:

first,copy the video folder into `ckeditor/plugins` and add the `extraPlugins` attribute into your config of ckeditor:

`config.extraPlugins = "video"`

then,add the name of the plugin into your toolbar_config like this:

`['Video']` <--this should be uppercased

last,set which toolbar you wanna use this plugin in the file named `video/plugin.js` :

`editor.ui.addButton( 'Video', {
    label: '视频',
    command: 'video',
    toolbar: 'theToolbarThatYouWannaUse'
  });
`

# Dependencies:

- [qiniu-js-sdk](https://github.com/qiniu/js-sdk)

- [plupload](https://github.com/moxiecode/plupload)

# Attention:

before use,you should import `plupload.js` and `qiniu-js-sdk` early than the `ckeditor.js`
