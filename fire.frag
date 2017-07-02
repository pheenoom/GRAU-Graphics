#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float slice = 0.1;
uniform float time;
uniform sampler2D sampler0;
uniform sampler2D sampler1;
uniform sampler2D sampler2;
uniform sampler2D sampler3;

void main()
{
    int frame = int(time/slice)%4;
    vec4 textura;
    if (frame == 0) {
        textura = texture(sampler0, vtexCoord);
    }
    else if (frame == 1) {
        textura = texture(sampler1, vtexCoord);    
    }
    else if (frame == 2) {
        textura = texture(sampler2, vtexCoord);    
    }
    else {
        textura = texture(sampler3, vtexCoord);    
    }
    
    fragColor = textura * textura.a;
}
