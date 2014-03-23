#BEGIN_PROPERTIES#
{
    "commandsIntroduced": [],
    "music": "coming soon"
}
#END_PROPERTIES#
/*******************
 * multiplicity.js *
 *******************
 *
 * Out of one cell and into another. They're not giving you
 * very much to work with here, either. Ah, well.
 *
 * Level filenames can be hints, by the way. Have I
 * mentioned that before?
 *
 * No more cells after this one. I promise.
 */

function startLevel(map) {

    map.placePlayer(map.getWidth()-5, map.getHeight()-4);

    for (y = 7; y <= map.getHeight() - 3; y++) {
        map.placeObject(7, y, 'block');
        map.placeObject(map.getWidth() - 3, y, 'block');
    }
#BEGIN_EDITABLE#

#END_EDITABLE#
    for (x = 7; x <= map.getWidth() - 3; x++) {
        map.placeObject(x, 7, 'block');
        map.placeObject(x, map.getHeight() - 3, 'block');
    }

    map.placeObject(map.getWidth() - 5, 5, 'exit');
#END_OF_START_LEVEL#
}

function validateLevel(map) {
    numBlocks = 2 * (map.getHeight()-13) + 2 * (map.getWidth()-10);

    map.validateAtLeastXObjects(numBlocks, 'block');
}
