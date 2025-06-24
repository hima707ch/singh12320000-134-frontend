import { useState, useEffect } from 'react';

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties/search');
        if (!response.ok) throw new Error('Failed to fetch properties');
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // For demo purposes, using mock data
    const mockProperties = [
      {
        title: 'Luxury Villa',
        location: 'Beverly Hills, CA',
        price: '2,500,000'
      },
      {
        title: 'Modern Apartment',
        location: 'Manhattan, NY',
        price: '850,000'
      },
      {
        title: 'Seaside Cottage',
        location: 'Miami Beach, FL',
        price: '1,200,000'
      }
    ];

    setProperties(mockProperties);
    setLoading(false);
  }, []);

  return { properties, loading, error };
};

export default useProperties;