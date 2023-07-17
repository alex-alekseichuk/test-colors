export function colorsApi() {
  const baseUrl = 'http://localhost:5189/colors';
  return {
    listColors: async () => {
      const res = await fetch(`${baseUrl}/`);
      return await res.json();
    },
    addColor: async (color) => {
      const res = await fetch(`${baseUrl}/`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          color
        })
      });
      return await res.json();
    },
    removeColor: async (id) => {
      await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
      });
    }
  }
}
