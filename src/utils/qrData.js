export const generateQRData = (type, data) => {
  switch (type) {
    case 'website':
      return normalizeUrl(data.url);
    case 'text':
      return data.text;
    case 'phone':
      return `tel:${data.phone}`;
    case 'sms':
      return `SMSTO:${data.phone}:${encodeURIComponent(data.message)}`;
    case 'email':
      const emailData = `mailto:${data.email}`;
      const params = new URLSearchParams();
      if (data.subject) params.append('subject', data.subject);
      if (data.message) params.append('body', data.message);
      return params.toString() ? `${emailData}?${params.toString()}` : emailData;
    case 'location':
      return `geo:${data.latitude},${data.longitude}`;
    case 'wifi':
      return `WIFI:T:${data.security};S:${encodeURIComponent(data.networkName)};P:${encodeURIComponent(data.password)};;`;
    case 'whatsapp':
      return `https://wa.me/${data.phone.replace(/\D/g, '')}?text=${encodeURIComponent(data.message)}`;
    default:
      return '';
  }
};

export const normalizeUrl = (url) => {
  if (!url) return '';
  url = url.trim();
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};
