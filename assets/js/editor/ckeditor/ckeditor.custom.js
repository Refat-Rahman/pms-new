// Default ckeditor
CKEDITOR.replace( 'editor1', {
    on: {
        contentDom: function( evt ) {
            // Allow custom context menu only with table elemnts.
            evt.editor.editable().on( 'contextmenu', function( contextEvent ) {
                var path = evt.editor.elementPath();

                if ( !path.contains( 'table' ) ) {
                    contextEvent.cancel();
                }
            }, null, null, 5 );
        }
    }
} );

// Inline ckeditor


CKEDITOR.replace( 'editor2', {
    on: {
        contentDom: function( evt ) {
            // Allow custom context menu only with table elemnts.
            evt.editor.editable().on( 'contextmenu', function( contextEvent ) {
                var path = evt.editor.elementPath();

                if ( !path.contains( 'table' ) ) {
                    contextEvent.cancel();
                }
            }, null, null, 5 );
        }
    }
} );

// Inline ckeditor

CKEDITOR.replace( 'editor3', {
    on: {
        contentDom: function( evt ) {
            // Allow custom context menu only with table elemnts.
            evt.editor.editable().on( 'contextmenu', function( contextEvent ) {
                var path = evt.editor.elementPath();

                if ( !path.contains( 'table' ) ) {
                    contextEvent.cancel();
                }
            }, null, null, 5 );
        }
    }
} );

CKEDITOR.replace( 'editor4', {
    on: {
        contentDom: function( evt ) {
            // Allow custom context menu only with table elemnts.
            evt.editor.editable().on( 'contextmenu', function( contextEvent ) {
                var path = evt.editor.elementPath();

                if ( !path.contains( 'table' ) ) {
                    contextEvent.cancel();
                }
            }, null, null, 5 );
        }
    }
} );


CKEDITOR.replace( 'editor5', {
    on: {
        contentDom: function( evt ) {
            // Allow custom context menu only with table elemnts.
            evt.editor.editable().on( 'contextmenu', function( contextEvent ) {
                var path = evt.editor.elementPath();

                if ( !path.contains( 'table' ) ) {
                    contextEvent.cancel();
                }
            }, null, null, 5 );
        }
    }
} );

