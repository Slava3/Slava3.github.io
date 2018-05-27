/**
 * Created by Слава on 25.05.18.
 */
'use strict';
//window.history.pushState("object or string", "Title", "Thank U for watching");
function changeHash(id) {
        try {
            history.replaceState(null, null, '?id=' + id);
        }
        catch (e) {
            location.hash = '#id_' + id;
        }

    };
changeHash("Thank U for watching!");
