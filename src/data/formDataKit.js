module.exports = {
  createCustomerFormData: (formData) => {
    const formarray = [
      {
        label: 'title',
        input: {
          type: 'text',
          name: 'title',
          value: formData['title'],
          placeholder: 'Title here'
        }
      },
      {
        label: 'content',
        input: {
          type: 'textarea',
          name: 'content',
          value: formData['content'],
          placeholder: 'content here'
        }
      },
      {
        label: 'category',
        select: {
          id: "category",
          type: 'text',
          name: 'category',
        }
      }
    ]
    return formarray
  }
}