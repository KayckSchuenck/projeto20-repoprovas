import prisma  from '../database.js';

async function main() {
    for(let i=0;i<6;i++){
        const terms = {
            number:i+1
        };
        await prisma.term.upsert({
            where: { number: terms.number },
            update: {},
            create: terms
        });
    }
    await prisma.teacher.upsert({
      where: { name: 'Diego Pinho'},
      update: {},
      create: { name: 'Diego Pinho'}
    });
    await prisma.teacher.upsert({
      where: { name: 'Bruna Hamori'},
      update: {},
      create: { name: 'Bruna Hamori'}
    });
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });