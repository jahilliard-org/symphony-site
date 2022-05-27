import fs from "fs"
import path from "path"
import { Project, EnhacedProject } from "types"

// function grabs the first image in the directory with the same id as the portfolio
export const getPortfolioProjectImages = (projects: Project[]): EnhacedProject[] => {
  const enhancedProjects: EnhacedProject[] = projects.map((project) => {
    // set the path that next can access
    const relativeProjectPath = path.join("/portfolio", project.id)

    // set the path that the fs can access
    const pathname = path.join(process.cwd(), "public", relativeProjectPath)

    // build the base enhanced project
    const enhancedProject: EnhacedProject = { ...project, showcaseImg: "", imgs: [] }

    // build the a list of the enhanced projects
    return fs.readdirSync(pathname).reduce((project, filename, i) => {
      const imgPath = path.join(relativeProjectPath, filename)
      project.imgs.push(imgPath)
      // set the first photo in the directory to the showcase Img
      if (i === 0) {
        return {
          ...project,
          showcaseImg: imgPath,
        }
      }
      return project
    }, enhancedProject)
  })

  return enhancedProjects
}
