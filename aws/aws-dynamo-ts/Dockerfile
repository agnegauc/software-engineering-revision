FROM public.ecr.aws/lambda/nodejs:12
 
COPY src/handler.ts ./
 
EXPOSE 3000

# You can overwrite command in `serverless.yml` template
CMD ["handler.handle"]