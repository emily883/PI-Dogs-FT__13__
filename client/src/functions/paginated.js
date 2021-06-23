const limit = 8;

export default function paginated(model, page) {
    const start = (page - 1) * limit; 
    const end = page * limit; 

    return model.slice(start, end);
  }