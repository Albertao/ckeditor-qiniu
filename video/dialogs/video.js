CKEDITOR.dialog.add( 'videoDialog', function ( editor ) {
    var link;//保存上传成功后的视频地址
    var availableExtensions = "mp4,avi,ogg,webm";
    return {
        title: '视频属性',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'flv',
                label: 'VIDEO URL',
                elements: [
                    {
                        type: 'button',
                        id: 'videoPath',
                        label: '选择视频文件',
                        validate: CKEDITOR.dialog.validate.notEmpty( "视频路径不能为空！" )
                    }
                ]
            }
        ],

        onLoad: function () {
            var uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4',      // 上传模式,依次退化
                browse_button: 'cke_78_uiElement',         // 上传选择的点选按钮，**必需**
                uptoken_url: 'http://localhost:2080/admin.php/photoinfo/token',         // Ajax 请求 uptoken 的
                get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的 uptoken
                unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
                domain: 'http://7xn3su.com1.z0.glb.clouddn.com/',     // bucket 域名，下载资源时用到，**必需**
                max_file_size: '100mb',             // 最大文件体积限制
                chunk_size: '4mb',
                drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
                auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
                filters: {
                    mime_types:[
                        { title : "Video files", extensions : availableExtensions }
                    ],
                },

                init: {
                    'BeforeUpload': function(up, file) {
                        alert('开始上传文件，请等待文件上传完成后再点击确定按钮');
                    },
                    'FileUploaded': function(up, file, info) {
                        console.log(info);
                        var fileSize = plupload.formatSize(file.size).toUpperCase();
                        var res = $.parseJSON(info);
                        var domain = up.getOption('domain');
                        link = domain + res.key;
                        console.log(link);
                        alert('上传完毕');
                    },
                    'Error': function(up, err, errTip) {
                        alert(err);
                    }

                }
            });
        },
        onOk: function() {
            console.log(link);
            var dialog = this;
            var video = editor.document.createElement( 'video' );
            video.setAttribute('src', link);
            video.setAttribute('controls', 'controls');
            video.setAttribute('width', '100%');
            editor.insertElement( video );
        }
    };
});