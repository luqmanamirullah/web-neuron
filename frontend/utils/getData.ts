async function getData(url: string): Promise<any> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const data = await res.json();
  return data;
}

export default getData;
