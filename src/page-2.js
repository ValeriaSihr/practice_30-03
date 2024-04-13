import { KEY } from './js/const';
import { deleteEl } from './js/delete-elem';
import refs from './js/refs';
import { saveData } from './js/show-markup';

saveData(KEY, refs.ls);
deleteEl(KEY, refs.ls);
