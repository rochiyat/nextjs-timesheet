// services.ts

const url = 'https://hr.talenta.co/api/web/time-sheet';

export async function submitTask(formData: any, cookie: string) {
  try {
    const response = await fetch(`${url}/store`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookie,
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
