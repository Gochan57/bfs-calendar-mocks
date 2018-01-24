/**
 * Удаление задачи.
 */

import * as Model from 'src/model/index';

export function deleteTask(): Model.Response<null> {
    return {
        success: true
    }
}