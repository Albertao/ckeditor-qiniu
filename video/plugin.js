CKEDITOR.plugins.add( 'video', {
    icons: 'video',
    init: function( editor ) {
        editor.addCommand( 'video', new CKEDITOR.dialogCommand( 'videoDialog' ) );

        editor.ui.addButton( 'Video', {
            label: '视频',
            command: 'video',
            toolbar: 'Test'
        });

        CKEDITOR.dialog.add( 'videoDialog', this.path + 'dialogs/video.js' );
    }
});