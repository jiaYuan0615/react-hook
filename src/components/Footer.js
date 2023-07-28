import "./Footer.scss"

export default function Footer() {
  return (
    <div className="footer flex justify-center w-full">
      {new Date().getFullYear()}&copy; x Footer
    </div>
  )
}