import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify();

await fastify.register(cors, {});

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'Server working fine!' })
})
try {
	await fastify.listen({ port: 3000 });
	console.log('Server listening on port 3000');
} catch (err) {
	console.error('Error starting server:', err);
	process.exit(1);
}