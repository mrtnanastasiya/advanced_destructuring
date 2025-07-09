
export default function extractSpecials({ special }) {
  if (!special) {
    return [];
  }

  const extractedSpecials = special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
    id,
    name,
    description,
    icon
  }));

  return extractedSpecials;
}
