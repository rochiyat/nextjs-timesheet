import React, { useState } from 'react';
import { submitTask } from '../services';
import { formatTaskData } from "@/app/formatted";
import moment from "moment";

function CreateTaskModule() {
    const [formData, setFormData] = useState({
        cookie: '',
        taskId: '',
        activity: '',
        fromDate: '',
        toDate: ''
    });

    // @ts-ignore
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Data yang akan disimpan:', formData);
        let formattedData;
        let result;
        const { fromDate, toDate } = formData;

        const diffDays = moment(toDate).diff(moment(fromDate), 'days');
        if(diffDays < 0 ) {
            alert('From date should not be greater than to date');
            return;
        } else if(diffDays === 0) {
            formattedData = formatTaskData(formData);
            result = await submitTask(formattedData, formData.cookie);
        } else if(diffDays > 0) {
            let promises = [];
            let payloadData;
            let date;
            const { taskId, activity } = formData;
            for (let i = 0; i <= diffDays; i++) {
                date = moment(fromDate).add(i, 'days');
                if (date.day() === 0 || date.day() === 6) {
                    continue;
                }
                payloadData = {
                    taskId,
                    activity,
                    startDate: moment(date).format('YYYY-MM-DD'),
                    endDate: moment(date).format('YYYY-MM-DD'),
                }
                formattedData = formatTaskData(formData);
                promises.push(submitTask(formattedData, formData.cookie));
            }
            result = await Promise.all(promises);
        }
        console.log('Result:', result);
        alert('Task submitted successfully');
        setFormData({
            ...formData,
            fromDate: '',
            toDate: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center top-1">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">Create Bulk/Single Task</h1>
            <div>
                <label className="block text-gray-700">Cookie</label>
                <textarea required={true}
                    name="cookie"
                    value={formData.cookie}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                ></textarea>
            </div>
            <div>
                <label className="block text-gray-700">Task ID</label>
                <input required={true}
                    type="text"
                    name="taskId"
                    value={formData.taskId}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                />
            </div>
            <div>
                <label className="block text-gray-700">Activity</label>
                <textarea required={true}
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                ></textarea>
            </div>
            <div>
                <label className="block text-gray-700">From Date</label>
                <input required={true}
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                />
            </div>
            <div>
                <label className="block text-gray-700">To Date</label>
                <input required={true}
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                />
            </div>
            <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-md">
                Submit
            </button>
        </form>
    );
}

export default CreateTaskModule;
