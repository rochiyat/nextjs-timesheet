import moment from 'moment';

const startTime = '09:00:00';
const endTime = '17:00:00';

// @ts-ignore
export function formatTaskData(payload) {
    const { taskId, activity, startDate, endDate } = payload;
    return {
        task_id: taskId,
        activity: activity,
        start_time: moment(startDate).format(`YYYY-MM-DD ${startTime}`),
        end_time: moment(endDate).format(`YYYY-MM-DD ${endTime}`),
    }
}
