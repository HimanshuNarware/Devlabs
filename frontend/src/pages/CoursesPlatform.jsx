import React from 'react';
import '../style/Courses.css'; 

const courses = [
    {
      title: "Introduction to Programming",
      category: "Computer Science",
      description:
        "Learn the basics of programming using Python. Ideal for beginners with no prior experience.",
      duration: "12 weeks",
      image: "https://i.pinimg.com/564x/90/44/a6/9044a634e09b2a633ff73efad0fdf470.jpg",
      startDate: "2024-09-01",
      endDate: "2024-11-24",
      instructor: "Jane Doe",
      price: 199.99,
    },
    {
      title: "Advanced Mathematics",
      category: "Mathematics",
      description:
        "Explore advanced topics in calculus and linear algebra. Suitable for students with a strong math background.",
      duration: "14 weeks",
      image: "https://i.pinimg.com/564x/06/6d/01/066d01021f6941465b30837fd3a89e1e.jpg",
      startDate: "2024-09-05",
      endDate: "2024-12-12",
      instructor: "Dr. John Smith",
      price: 299.99,
    },
    {
      title: "Digital Marketing",
      category: "Business",
      description:
        "Learn the fundamentals of digital marketing, including SEO, social media marketing, and email marketing.",
      duration: "10 weeks",
      image: "https://i.pinimg.com/564x/9f/29/ad/9f29adf4942d8d4729726c8266a32b85.jpg",
      startDate: "2024-10-01",
      endDate: "2024-12-10",
      instructor: "Emily Johnson",
      price: 149.99,
    },
    {
      title: "Introduction to Graphic Design",
      category: "Design",
      description:
        "Learn the basics of graphic design using Adobe Photoshop and Illustrator.",
      duration: "8 weeks",
      image: "https://i.pinimg.com/736x/5d/28/90/5d289055564c7f5b0ff3d55d438f1a24.jpg",
      startDate: "2024-09-15",
      endDate: "2024-11-10",
      instructor: "Michael Brown",
      price: 249.99,
    },
    {
      title: "World History",
      category: "History",
      description:
        "Explore the major events and themes in world history from ancient times to the present.",
      duration: "16 weeks",
      image: "https://i.pinimg.com/736x/61/da/85/61da85e6093a89564a2e73724e25f9b7.jpg",
      startDate: "2024-09-20",
      endDate: "2025-01-10",
      instructor: "Dr. Lisa Green",
      price: 179.99,
    },
    {
      title: "Creative Writing",
      category: "Literature",
      description:
        "Develop your writing skills and learn how to craft compelling stories and essays.",
      duration: "10 weeks",
      image: "https://i.pinimg.com/564x/61/70/cd/6170cdbd957b9737830b2d0afdbbdde3.jpg",
      startDate: "2024-10-10",
      endDate: "2024-12-20",
      instructor: "David Wilson",
      price: 129.99,
    },
    {
      title: "Learn World",
      category: "History",
      description:
        "LearnWorlds is an advanced online course creation platform .",
      duration: "10 weeks",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PQr4qbjQD4JcNSSO5Vs5-xU9KhXEGSugMw&s",
      startDate: "2024-10-10",
      endDate: "2024-12-20",
      instructor: " Panos Siozos",
      price: 150.99,
    },
];

const CoursesPlatform = () => {
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <h1 className="title" style={{color:'white'}}>Available Courses</h1>
      <div className="grid-container">
        {courses.map((course, index) => (
          <div key={index} className="grid-item" style={{ objectFit: 'cover', maxWidth: '100%' }}>
            <img  src={course.image} alt={course.title} height={200} width={'100%'} className="course-image" />
            <h2 className="course-title">{course.title}</h2>
            <p className="course-category">{course.category}</p>
            <p className="course-duration">{course.duration}</p>
            <p className="course-description">{course.description}</p>
            <p className="course-instructor">Instructor: {course.instructor}</p>
            <p className="course-dates">Dates: {course.startDate} : {course.endDate}</p>
            <p className="course-price" style={{fontWeight: "bolder"}}>${course.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPlatform;
