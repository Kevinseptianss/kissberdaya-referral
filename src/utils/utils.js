export async function sendWhatsAppMessage(text, phone) {
    const url = 'https://api.dripsender.id/send';
    const apiKey = '855d3532-a042-45e3-a42a-4d637b2a289a';
    const body = {
        api_key: apiKey,
        text: text,
        phone: phone
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Message sent successfully:', data);
        return data;
    } catch (error) {
        console.error('Error sending message:', error);
    }
}