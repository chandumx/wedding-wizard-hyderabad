// Predefined mappings for location images to reduce API calls
export const locationImageMappings = {
  'Upparpally': 'https://images.unsplash.com/photo-1580751667882-99d506a4c2b4',
  'LB Nagar': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220',
  'Hyderguda': 'https://images.unsplash.com/photo-1589778655375-3c22e42b3515',
  'Himayat Sagar': 'https://images.unsplash.com/photo-1506125840744-167167210587',
  'Shivrampally': 'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8',
  'Shadnagar': 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
  'default': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
};

export const getLocationImage = (locationName: string): string => {
  const key = Object.keys(locationImageMappings).find(
    key => locationName.toLowerCase().includes(key.toLowerCase())
  );
  return locationImageMappings[key || 'default'];
};