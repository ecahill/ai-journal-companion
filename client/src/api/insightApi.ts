export const fetchInsight = async (text: string): Promise<string> => {
    const res = await fetch('http://localhost:5001/api/insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to fetch AI insight. Server said ${text}`);
    }

    const data = await res.json();
    return data.aiInsight;
}