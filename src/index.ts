import "./style"
import "./projects"
import "./tasks"
import "./details"


interface Project {
  projects: [
    {
      title?: any;
      tasks?: [
        {
          title?: any;
          details?: any;
        }
      ];
    }
  ];
}

export const app = {
  projects: [
    {
      title: "709",
    },
  ],
} as Project;
console.log(app);
