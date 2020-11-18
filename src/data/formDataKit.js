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
          type: 'text',
          id: "category",
          name: 'category',
          value: formData['category']
        }
      }
    ]
    return formarray
  },
  createReplyFormData: (formData) => {
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
      }
    ]
    return formarray
  },
  createSignupFormData: (formData) => {
    const formArray = [
      {
        label: 'First Name',
        input: {
          type: 'text',
          name: 'firstname',
          value: formData['firstname'],
          placeholder: 'Enter your first name'
        }
      },
      {
        label: 'Last Name',
        input: {
          type: 'text',
          name: 'lastName',
          value: formData['lastName'],
          placeholder: 'Enter your last name'
        }
      },
      {
        label: 'Password',
        input: {
          type: 'password',
          name: 'password',
          value: formData['password'],
          placeholder: 'Enter password'
        }
      },
      {
        label: 'Email',
        input: {
          type: 'email',
          name: 'email',
          value: formData['email'],
          placeholder: 'Enter email'
        }
      },
      {
        label: 'Country',
        select: {
          type: 'text',
          id: 'country',
          name: 'country',
          value: formData['country']
        }
      }
    ]
    return formArray
  }
}
