import prisma from '../../../../lib/prisma'

export default async function handler (req: any, res: any) {
  const data = req.body
  try{
      const member = await prisma.member.create({
        data: data
      })
      res.status(200).json(member)
  }catch(err){
      console.log(err);
  }
}