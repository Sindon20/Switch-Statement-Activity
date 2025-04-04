const day = promt("Enter a day of the week:").toLowerCase();
let task;

switch(day) {
    case 'monday':
        task = "Finish your assignment.";
        break;
    case 'tuesday':
        task = "Read your lesson.";
        break;
    case 'wednesday':
        task = "Work on your project.";
        break;
    case 'thursday':
        task = "Review Dsa.";
        break;
    case 'friday':
        task = "Prepare for the weekend study session.";
        break;
    case 'saturday':
        task = "Practice coding.";
        break;
    case 'sunday':
        task = "Attend Church.";
        break;
    default:
        task = "Free day";
}

console.log('You task for ${day.charAt(0).toUpperCase() + day.slice(1)} is: ${task}');